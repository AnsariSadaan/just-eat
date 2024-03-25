import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
// import '@testing-library/jest-dom'
import "@testing-library/jest-dom"

describe('Contact us page test cases', ()=>{
    // it and test are same thing
    // beforeAll(()=>{
    //     console.log("Before All");
    // })

    // beforeEach(()=>{
    //     console.log("Before Each");
    // })

    // afterAll(()=>{
    //     console.log("After All")
    // })

    // afterEach(()=>{
    //     console.log("After Each")
    // })

    it("Should load contact us component", () => {
        render(<Contact />);
        const Heading = screen.getByRole('heading');
        //Assertion
        expect(Heading).toBeInTheDocument();
    })

    it("Should load button inside contact component", () => {
        render(<Contact />);
        const button = screen.getByRole('button');
        //Assertion
        expect(button).toBeInTheDocument();
    })

    it("Should load input name inside contact component", () => {
        render(<Contact />);
        const inputName = screen.getByPlaceholderText('Name');
        //Assertion
        expect(inputName).toBeInTheDocument();
    })

    it("Should load 2 input boxes inside contact component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole('textbox')
        // console.log(inputBoxes.length)
        expect(inputBoxes.length).not.toBe(3);
    })
})

