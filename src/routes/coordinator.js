export const goToHome = (navigate) => {
    navigate("/");
  };

export const goToDetailsPage = (navigate, results="") => {
  navigate(`/details`, results);
};

export const goToList = (navigate) => {
    navigate("/pokedex");
  };

  export function goToErrorPage(navigate) {
    navigate("*");
  }