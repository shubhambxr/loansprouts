export async function generateMetadata({ params }) {
  const typeLoanChange = params.typeloan.replaceAll("-", " ");
  const city = params.city
  const area = params.area
  return {
    title: `Loansprouts | ${typeLoanChange} | ${city} | ${area}`,
    description: "Develop By Websoftex",
  };
}
const layout = ({ children }) => {
    return children;
  };
  export default layout;