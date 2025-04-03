import React from "react";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { Search } from "lucide-react";

/**
 * Search form component for finding startups.
 *
 * Renders a form with a search input field and a reset button that
 * appears when a query is entered. The form submits to the root route.
 *
 *
 * @example
 * <SearchForm />
 */
function SearchForm({ query }: { query?: string }) {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue=""
        className="search-input"
        placeholder="Search for startups..."
      />

      <div className="flex gap-2">
        {query && <SearchFormReset />}

        <button type="submit" className="search-btn text-white">
          <Search className="size-5" />
        </button>
      </div>
    </Form>
  );
}

export default SearchForm;
