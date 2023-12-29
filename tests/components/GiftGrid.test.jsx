import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from '../../src/hooks/useFetchGifs'

jest.mock('../../src/hooks/useFetchGifs')

describe('GiftGrid test', () => { 
    const category = 'One Punch'
    test('should show loading initially', () => { 
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading: true
        })

        render(<GifGrid category={category}/>)
        expect(screen.getByText('Cargando...'))
     })
     test('should show images when images are loaded by useFetchGifs', () => { 
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'https://prueba.com/saitama.jpg'
        },
        {
            id: '123',
            title: 'Goku',
            url: 'https://prueba.com/goku.jpg'
        }]

        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading: false
        })
        render(<GifGrid category={category}/>)

        expect(screen.getAllByRole('img').length).toBe(2)
      })
 })