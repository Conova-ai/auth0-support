/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Typography } from '@material-ui/core';


interface ISearchPageProps{
    location: any;
}

const SearchPage = (props: ISearchPageProps) => {

    return (
        <>
            <Typography> WELCOME TO THE SEARCH PAGE (NO MORE LOOP!) </Typography>
            <Button href={window.location.origin} variant='outlined'>{'Go to landing page'}</Button>
        </>
    )
}

export default SearchPage