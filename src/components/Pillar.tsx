export type PillarProps = {
    title: string;
    text: string;
    image: string;
}
export const Pillar = ({ title, text, image }: PillarProps) => {
    return (
        <section className="pillar">
            <img src={ image } className='image'/>
            <p><strong>{ title }</strong>: { text }</p>
        </section>
    )
}