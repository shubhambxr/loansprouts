export async function generateMetadata({ params }) {
  const typeLoanChange = params.typeloan.replaceAll("-", " ");
  const city = params.city
  return {
    title: `Loansprouts | ${typeLoanChange} | ${city}`,
    description: "Develop By Websoftex",
  };
}

const layout = ({ children }) => {
  return children;
};

export default layout;
