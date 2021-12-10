import Sales from "../../MOCK_DATA.json";


export const GET_SALES = "GET_SALES";


export function setSales() {
  return (dispatch) => dispatch({
    type:GET_SALES, 
    payload: Sales
  }) 
}
