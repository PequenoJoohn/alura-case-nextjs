import FAQScreen from "../src/components/Screens/FAQScreen";
export default FAQScreen;
// getStaticProps #Roda só umas vez
// getServerSideProps #Roda toda vez

export async function getStaticProps() {
  const FAQ_API_URL =
    "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const faq = await fetch(FAQ_API_URL)
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      return response;
    });
  return {
    props: {
      faq,
    },
  };
}

// const Faq = ({ faq }) => {
//   console.log(faq);
//   //   useEffect(() => {

//   //   }, []);
//   return (
//     <div>
//       <PageTitle children={"FAQ - Alura Cases"} />

//       <h1>FAQ</h1>
//       <Link href="/">Ir para home</Link>

//       <ul>
//         {faq.map(({ answer, question }) => (
//           <li key={answer}>
//             <article>
//               <h2>{question}</h2>
//               <p>{answer}</p>
//             </article>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// Faq.defaultProps = {
//   faqs: [],
// };

// export default Faq;
