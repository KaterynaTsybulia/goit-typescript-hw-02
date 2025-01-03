
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { IoSearchOutline } from "react-icons/io5";
import css from './SearchBar.module.css';


interface SearchBarProps {
  onSubmit: (value: string) =>void;
}

const SearchBar:React.FC<SearchBarProps> = ({onSubmit}) => {
const [query, setQuery] = useState ("")

const handleChange = (evt:React.ChangeEvent<HTMLInputElement>) => {setQuery(evt.target.value)}

const handleSubmit = (evt:FormEvent<HTMLFormElement>) => {
  evt.preventDefault()

  if(!query.trim()) { return toast.error('Cannot be empty!')}
  onSubmit(query)
  setQuery("")
}

  return (
    <header className={css.container}>
    <form className={css.wraper} onSubmit={handleSubmit}>
      <button className={css.button} type="submit"><IoSearchOutline/></button>
      <input className={css.input}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search images and photos"
        value={query}
        onChange={handleChange}
      />
      
    </form>
    <Toaster position="top-right"/>
  </header>
  );
}

export default SearchBar;