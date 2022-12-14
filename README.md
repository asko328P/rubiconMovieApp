Movie app for Rubicon
Made using TMDB api with React, TypeScript and Redux

<pre>
[ ]/RubiconMovieApp/
 ├─────[ ]src/
 │      ├─────[ ]components/
 │      │      ├─────[ ]commonComponents/
 │      │      │      ├─────SearchBar.tsx
 │      │      │      ├─────SearchSwitcher.tsx
 │      │      │      └─────YoutubeIframe.tsx
 │      │      ├─────[ ]pages/
 │      │      │      ├─────[ ]MovieDetail/
 │      │      │      │      ├─────MovieDetail.tsx
 │      │      │      │      └─────MovieDetailCard.tsx
 │      │      │      ├─────[ ]MovieResults/
 │      │      │      │      ├─────MovieItem.tsx
 │      │      │      │      ├─────MovieList.tsx
 │      │      │      │      └─────SearchScreen.tsx
 │      │      │      ├─────[ ]TVShowDetail/
 │      │      │      │      ├─────TVShowDetail.tsx
 │      │      │      │      └─────TVShowDetailCard.tsx
 │      │      │      └─────[ ]TVShows/
 │      │      │      │      ├─────ShowItem.tsx
 │      │      │      │      ├─────ShowsList.tsx
 │      │      │      │      └─────TVsearchScreen.tsx
 │      │      └─────App.tsx
 │      ├─────[ ]css/
 │      │      ├─────[ ]commonComponents/
 │      │      │      ├─────SearchBar.css
 │      │      │      └─────SearchSwitcher.css
 │      │      ├─────[ ]pages/
 │      │      │      ├─────[ ]MovieDetail/
 │      │      │      │      ├─────MovieDetail.css
 │      │      │      │      └─────MovieDetailCard.css
 │      │      │      └─────[ ]MovieResults/
 │      │      │      │      ├─────MovieItem.css
 │      │      │      │      └─────MovieList.css
 │      │      └─────App.css
 │      ├─────[ ]hooks/
 │      │      └─────redux-hooks.ts
 │      ├─────[ ]services/
 │      │      └─────[ ]TMDB/
 │      │      │      ├─────api.ts
 │      │      │      ├─────movieService.ts
 │      │      │      ├─────showsService.ts
 │      │      │      └─────trailerService.ts
 │      ├─────[ ]store/
 │      │      ├─────[ ]features/
 │      │      │      ├─────[ ]Movies/
 │      │      │      │      ├─────actions.ts
 │      │      │      │      └─────movieSlice.ts
 │      │      │      ├─────[ ]Query/
 │      │      │      │      └─────querySlice.ts
 │      │      │      ├─────[ ]TVshows/
 │      │      │      │      ├─────TVshowsSlice.ts
 │      │      │      │      └─────actions.ts
 │      │      │      └─────[ ]selectedId/
 │      │      │      │      └─────selectedIdSlice.ts
 │      │      ├─────[ ]types/
 │      │      │      ├─────actionTypes.ts
 │      │      │      └─────types.ts
 │      │      ├─────configureStore.ts
 │      │      └─────reducers.js.ts
 │      ├─────App.test.tsx
 │      ├─────index.css
 │      ├─────index.tsx
 │      ├─────logo.svg
 │      ├─────react-app-env.d.ts
 │      ├─────reportWebVitals.ts
 │      └─────setupTests.ts
 ├─────os
 ├─────package-lock.json
 ├─────package.json
 ├─────tsconfig.json
 └─────yarn-error.log
 
 </pre>
