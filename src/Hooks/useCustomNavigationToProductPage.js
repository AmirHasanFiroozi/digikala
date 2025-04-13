import { useNavigate } from "react-router-dom";

export function useNavigateToProductPage(){
    const navigate = useNavigate();
    navigate("/products")
}