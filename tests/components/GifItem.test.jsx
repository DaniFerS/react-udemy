import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"

describe('GifItem test',()=>{
    const title = 'Prueba';
    const url = 'https://prueba.com/prueba'
    test('debe hacer match con el snapshot', () => { 
        const {container} = render(<GifItem title={title} url={url}/>)
        expect(container).toMatchSnapshot()
     })
    test('debe de mostrar la imagen con el URL y el ALT indicado', ()=>{
        render(<GifItem title={title} url={url}/>)
        const {src, alt} = screen.getByRole('img')
        expect(src).toBe(url);
        expect(alt).toBe(title);
     })
    test('debe de mostrar el titulo del componente', ()=>{
        render(<GifItem title={title} url={url}/>)
        expect(screen.getByText(title)).toBeTruthy();
     })
})