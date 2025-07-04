import { useLocation, useParams } from "react-router-dom";

const CommonCard = () => {
    console.log("asdfghjk")
    const { segment } = useParams();
    const location = useLocation();
    const { data, info } = location.state || {};
    console.log(data, "dnmertyu")
    console.log(info, "dnmertyu")
    return (
        <div style={{ padding: '20px' }}>
            <h2>Category: {data || segment}</h2>

            {info?.length ? (
                <div>
                    <h3>Info:</h3>
                    <ul style={{ listStyle: 'none', padding: 0 }}>
                        {info.map((entry, idx) => (
                            <li key={idx} style={{ marginBottom: '20px' }}>
                                <img src={entry.image} alt={entry.heading} width="100" />
                                <h4>{entry.heading}</h4>
                                <p>{entry.title}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <p>No info available.</p>
            )}
        </div>
    );
}
export default CommonCard