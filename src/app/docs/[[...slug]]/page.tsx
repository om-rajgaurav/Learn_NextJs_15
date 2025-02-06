
interface DocsProps {
     params: Promise<{
          slug: string;
     }>
}
// note if i put slug in single square bracket the doc url gives us error so to prevent this we use double square bracket
export default async function Docs({ params }: DocsProps) {

     const { slug } = (await params)

     if (slug?.length == 2) {
          return <h1>viewing Docs for feature{slug[0]} and concept{slug[1]}</h1>
     } else if (slug?.length == 1) {
          return <h1>viewing Docs for feature{slug[0]}</h1>
     }

     return <h1>Docs word!</h1>
}