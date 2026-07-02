import { useState } from "react";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { PageWrapper } from "./components/PageWrapper";
import { PuppiesList } from "./components/PuppiesList";
import { PuppyForm } from "./components/PuppyForm";
import { Search } from "./components/Search";
import { SortList } from "./components/SortList";
import { puppies as puppyData } from "./data/puppies";
import { Puppy } from "./types";
import { LikedContext } from "./context/liked-context";

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
  const [liked, setLiked] = useState<Puppy["id"][]>([1, 4]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [puppies, setPuppies] = useState<Puppy[]>(puppyData);

  return (
    <main>
      <LikedContext value={{ liked, setLiked }}>
      <div className="mt-24 grid gap-8 sm:grid-cols-2">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <SortList puppies={puppies} />
      </div>
        <PuppiesList puppies={puppies} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        </LikedContext>
        <PuppyForm puppies={puppies} setPuppies={setPuppies} />
    </main>
  )
}