import { getByRole, getByText, render } from "@testing-library/react"
import Contact from "../pages/Contact"


test('contact component testing' , ()=>{
    render(<Contact/>)
    let heading = getByText('Contact Us')
    expect(heading).toBeInTheDocument()
})