import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react-dom/test-utils"
import RestaurantMenu from "../RestaurantMenu"
import MOCK_DATA from "../../mocks/mockResMenu.json"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () => { return Promise.resolve(MOCK_DATA) }
    })
})

it("Should load restaurant menu component", async ()=>{
    await act(async () => render(<Provider strore={appStore}><RestaurantMenu /></Provider> ))

    const accordionHeader = screen.getByText("Breads (9)");
    fireEvent.click(accordionHeader);

    
    expect(screen.getAllByTestId("foodItems").length.toBe(5));

})