import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <div style={{ padding: '20px' }}>
        <h2>404 - Halaman Tidak Ditemukan</h2>

        <p>
            Maaf, halaman yang Anda cari tidak ditemukan.
        </p>

        <button onClick={() => navigate('/')}>
            Kembali ke Beranda
        </button>
        </div>
    );
}
export default NotFound;