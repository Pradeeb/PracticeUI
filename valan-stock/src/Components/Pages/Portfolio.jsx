import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const Portfolio = () => {

    const fetchPortfolio = async () => {
        const response = await axios.get('http://localhost:8080/api/getallholding', { withCredentials: true });
        console.log(response);
        if (!response) throw new Error('Failed to load PortFolio');
        return response.data.data.data;
    }

    const { data: portfolioData, isLoading, isError, error } = useQuery({
        queryKey: ['getallholding'],
        queryFn: fetchPortfolio,
    });

    return (
        <div>
             {/* {portfolioData.data.data.data} */}
        </div>
    )
}

export default Portfolio