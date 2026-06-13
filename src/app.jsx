import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { PageWrapper } from "./components/PageWrapper";
import { PuppiesList } from "./components/PuppiesList";
import { PuppyForm } from "./components/PuppyForm";
import { Search } from "./components/Search";
import { SortList } from "./components/SortList";

export function App() {
  return (
    <PageWrapper>
      <Container>
        <Header />
        <Main />
      </Container>
    </PageWrapper>
  );
}

function Main() {
  return (
    <main>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search />
        <SortList />
      </div>
        <PuppiesList />
        <PuppyForm />
    </main>
  )
}