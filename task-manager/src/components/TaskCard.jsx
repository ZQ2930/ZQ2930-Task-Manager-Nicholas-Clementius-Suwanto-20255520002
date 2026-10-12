function TaskCard({ task, onDelete, onToggleComplete }) {
    return (
        <div
        style={{
            border: '1px solid #ccc',
            padding: '15px',
            marginBottom: '10px',
            borderRadius: '5px',
            backgroundColor: task.isCompleted ? '#e0e0e0' : 'white'
        }}
        >
        <h3
            style={{
            textDecoration: task.isCompleted
                ? 'line-through'
                : 'none'
            }}
        >
            {task.judul}
        </h3>

        <p>
            Kategori: <strong>{task.kategori}</strong>
        </p>

        <button
            onClick={() => onToggleComplete(task.id)}
            style={{
            marginRight: '10px',
            padding: '5px 10px'
            }}
        >
            {task.isCompleted
            ? 'Batalkan Selesai'
            : 'Tandai Selesai'}
        </button>

        <button
            onClick={() => onDelete(task.id)}
            style={{
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            padding: '5px 10px',
            cursor: 'pointer'
            }}
        >
            Hapus
        </button>
        </div>
    );
}

export default TaskCard;