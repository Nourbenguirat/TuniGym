
import React, { useState } from 'react';
import { fetchAllUsers } from '../../../api/UserApi'; 

const UserDisplay = () => {
    const [users, setUsers] = useState([]); 
    const [loading, setLoading] = useState(false); 
    const [error, setError] = useState(null); 

    const handleFetchUsers = async () => {
        setError(null);
        try {
            const data = await fetchAllUsers();
            setUsers(data.users); 
            console.log(users);
        } catch (err) {
            setError('Erreur lors de la récupération des utilisateurs.');
        }
    };
    console.log('users',users);

    return (
        <div>
           
            <button
                onClick={handleFetchUsers}
                style={{
                    padding: '10px 15px',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    marginBottom: '20px',
                }}
            >
                Afficher les utilisateurs
            </button>

            
            {loading && <p>Chargement des utilisateurs...</p>}

          
            {error && <p style={{ color: 'red' }}>{error}</p>}

            
            {users.length > 0 && (
                <ul>
                    {users.map((user) => (
                        <li key={user._id} style={{ marginBottom: '15px' }}>
                            <h3>{user.name}</h3>
                            <p>Age : {user.age}</p>
                            <p>Email : {user.email}</p>
                            <p>Poids : {user.weight} kg</p>
                            <p>Taille : {user.height} cm</p>
                            <p>Programme : {user.program?.name || 'Non défini'}</p>
                            <p>
                                Activité : {user.activities.activityLevel} ({user.activities.percentage}%)
                            </p>
                            {user.diseases.hasDisease && (
                                <div>
                                    <p>Maladie détectée :</p>
                                    <p>- Médecin : {user.diseases.doctor.name || 'Non spécifié'}</p>
                                    <p>- Contact : {user.diseases.doctor.contact || 'Non spécifié'}</p>
                                    <p>- Description : {user.diseases.doctor.description || 'Non spécifié'}</p>
                                </div>
                            )}
                        </li>
                    ))}
                </ul>
            )}

          {users.length === 0 &&   !loading && !error && <p>Aucun utilisateur disponible.</p>}
         
        </div>
    );
};

export default UserDisplay;
