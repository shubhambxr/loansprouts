export async function generateMetadata({ params }) {
  const typeLoanChange = params.typeloan.replaceAll("-", " ");
  return {
    title: `Loansprouts | ${typeLoanChange}`,
    description: "Develop By Websoftex",
  };
}

const layout = ({ children }) => {
  return children;
};

export default layout;
