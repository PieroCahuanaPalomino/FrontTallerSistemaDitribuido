// RegistroMascotas.js
import React, { useState, useEffect } from 'react';

const RegistroMascotas = () => {
  const [mascotas, setMascotas] = useState([]);
  const [nuevaMascota, setNuevaMascota] = useState({
    type: '',
    location: '',
    sex: '',
    side: '',
    age: '',
    image: null,
  });
  const [mascotaSeleccionada, setMascotaSeleccionada] = useState(null);

  //GET CARGAR LA TABLA 
  const cargarMascotas = async () => {
    try {
      const response = await fetch('http://localhost:80/api/pets');
      const data = await response.json();
      setMascotas(data);
    } catch (error) {
      console.error('Error al cargar las mascotas:', error);
    }
  };

  useEffect(() => {
    cargarMascotas();
  }, []); // Cargar las mascotas al montar el componente

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevaMascota((prevMascota) => ({ ...prevMascota, [name]: value }));
  };

  const handleImageChange = (e) => {
    const image = e.target.files[0];
    setNuevaMascota((prevMascota) => ({ ...prevMascota, image }));
  };

  //POST
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('type', nuevaMascota.type);
      formData.append('location', nuevaMascota.location);
      formData.append('sex', nuevaMascota.sex);
      formData.append('side', nuevaMascota.side);
      formData.append('age', nuevaMascota.age);
      formData.append('image', nuevaMascota.image);

      if (mascotaSeleccionada) {
        // Si hay una mascota seleccionada, se está editando EDITAR
        await fetch(`http://localhost:80/api/pets/${mascotaSeleccionada._id}`, {
          method: 'PUT',
          body: formData,
        });
      } else {
        // Si no hay una mascota seleccionada, se está agregando PARA AGREGAR
        await fetch('http://localhost:80/api/pets', {
          method: 'POST',
          body: formData,
        });
      }

      cargarMascotas(); // Recargar la lista de mascotas después de agregar una nueva
      setNuevaMascota({
        type: '',
        location: '',
        sex: '',
        side: '',
        age: '',
        image: null,
      });
      setMascotaSeleccionada(null); // Limpiar la mascota seleccionada después de agregar/editar
    } catch (error) {
      console.error('Error al agregar/editar la mascota:', error);
    }
  };

  //DELETE
  const handleEliminar = async (id) => {
    try {
      await fetch(`http://localhost:80/api/pets/${id}`, { //PARA ELIMINAR
        method: 'DELETE',
      });

      cargarMascotas(); // Recargar la lista de mascotas después de eliminar una
    } catch (error) {
      console.error('Error al eliminar la mascota:', error);
    }
  };

  // EDITAR
  const handleEditar = (mascota) => {
    setMascotaSeleccionada(mascota);
    setNuevaMascota({ ...mascota, image: null }); // Inicializar el formulario con la información actual
  };

  return (
    <div className="container">
      <h2>Registro de Mascotas</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'black' }}>Tipo</label>
          <input type="text" className="form-control" name="type" value={nuevaMascota.type} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'black' }}>Ubicación</label>
          <input type="text" className="form-control" name="location" value={nuevaMascota.location} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'black' }}>Sexo</label>
          <input type="text" className="form-control" name="sex" value={nuevaMascota.sex} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'black' }}>Tamaño</label>
          <input type="text" className="form-control" name="side" value={nuevaMascota.side} onChange={handleInputChange} />
        </div>
        <div className="mb-3">
          <label className="form-label" style={{ color: 'black' }}>Edad</label>
          <input type="text" className="form-control" name="age" value={nuevaMascota.age} onChange={handleInputChange} />
        </div>
      
        <div className="mb-3">
          <label className="form-label" style={{ color: 'black' }}>Imagen</label>
          <input type="file" className="form-control" name="image" onChange={handleImageChange} />
        </div>
        <button type="submit" className="btn btn-primary">{mascotaSeleccionada ? 'Editar' : 'Agregar'}</button>
      </form>

      <table className="table mt-4">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Ubicación</th>
            <th>Sexo</th>
            <th>Tamaño</th>
            <th>Edad</th>
            <th>Imagen</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {mascotas.map((mascota) => (
            <tr key={mascota._id}>
              <td>{mascota.type}</td>
              <td>{mascota.location}</td>
              <td>{mascota.sex}</td>
              <td>{mascota.side}</td>
              <td>{mascota.age}</td>
              <td>
                {mascota.image && <img src={mascota.image.url} alt={mascota.type} style={{ width: '50px', height: '50px' }} />}
              </td>
              <td>
                <button className="btn btn-danger mr-2" onClick={() => handleEliminar(mascota._id)}>Eliminar</button>
                <button className="btn btn-info" onClick={() => handleEditar(mascota)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistroMascotas;
