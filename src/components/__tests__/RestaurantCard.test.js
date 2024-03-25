import RestaurantCard, { withBestSellerLabel } from "../RestaurantCard"
import MOCK_DATA from "../../mocks/resCardMock.json"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

it("Should render restaurantCard component with props data", ()=>{
    render(<RestaurantCard resData={MOCK_DATA} />)
    const name = screen.getByText("Dabba Garam (Homestyle,Combo, Thali & More)");
    expect(name).toBeInTheDocument();
})

// it("Should render restaurantCard component with Bestseller label", ()=>{
//     render(<withBestSellerLabel resData={RestaurantCard} />)
//     const bestSeller = screen.getByText('BestSeller')
//     // const name = screen.getByText("Bestseller");
//     expect(bestSeller).toBeInTheDocument();

// })


const MockComponent = () => <div>Mock Component</div>;
const ComponentWithLabel = withBestSellerLabel(MockComponent);

it('renders a label with "BestSeller"', () => {
    render(<ComponentWithLabel />);

    const bestSellerLabel = screen.getByText('BestSeller');

    expect(bestSellerLabel).toBeInTheDocument();
    expect(bestSellerLabel).toHaveClass('bg-gray-600');
    expect(bestSellerLabel).toHaveClass('text-white');
    expect(bestSellerLabel).toHaveClass('p-1');
    expect(bestSellerLabel).toHaveClass('m-2');
    expect(bestSellerLabel).toHaveClass('rounded-lg');
});

it('renders the wrapped component', () => {
    render(<ComponentWithLabel />);
    expect(screen.getByText('Mock Component')).toBeInTheDocument();
});
