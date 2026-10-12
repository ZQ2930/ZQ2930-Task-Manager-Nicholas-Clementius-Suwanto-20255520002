import { useState } from 'react';
import TaskCard from '../components/TaskCard';

function Home({ tasks, onDeleteTask, onToggleComplete }) {
    const [search, setSearch] = useState('');

    const filteredTasks = tasks.filter((task) =>
        task.judul.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div style={{ padding: '20px' }}>
            <h2>Daftar Tugas Hari Ini</h2>
            
            <input type="text" placeholder="Cari tugas..." value={search} onChange={(e) => setSearch(e.target.value)} style={{ width: '300px', padding: '8px', marginBottom: '15px' }}/>

            {filteredTasks.length === 0 && ( <p>Tidak ada tugas yang ditemukan.</p> )}

            {filteredTasks.map((task) => (<TaskCard key={task.id} task={task} onDelete={onDeleteTask} onToggleComplete={onToggleComplete} />))}
        </div>
    );
}
export default Home;