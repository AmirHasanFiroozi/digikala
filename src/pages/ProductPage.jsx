import FilterBox from "../Ui/FilterBox/FilterBox"
import Header from "../Ui/Header/Header"

function ProductPage() {
    return (
        <>
          <Header />
          <main className="wholePageContainer">
            <FilterBox />
          </main>
        </>
    )
}

export default ProductPage
