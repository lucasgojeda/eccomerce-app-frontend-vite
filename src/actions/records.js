import { fetchConToken } from "../helpers/fetch";
import { types } from "../reducers/types/types";


export const activeRecord = ( record ) => ({
    type: types.activeRecord,
    payload: record
})

export const clearActiveRecord = () => ({
    type: types.clearActiveRecord
})


export const startLoadRecords = (filterBy, orderBy, searchText, page = 1) => {
    return async( dispatch ) => {
        const term = (searchText !== '' && searchText) ? searchText : 'home';

        try {
            const resp = await fetchConToken( `records/${term}?page=${page}&filterBy=${filterBy}&orderBy=${orderBy}` );
            const body = await resp.json(); 


            if( body.msg === 'OK' ) {

                console.log('Filtered records', body);

                const filteredRecords = body.results;

                console.log(filteredRecords)

                dispatch( loadRecords(filteredRecords) );

                window.scroll(0, 0);

            } else {
                console.log(body.msg);
            }
            

        } catch (error) {
            console.log(error);
        }
    }
}

const loadRecords = (records) => ({
    type: types.loadRecords,
    payload: records
})


export const addNewRecord = (record) => ({
    type: types.addNewRecord,
    payload: record
})  


export const startDeleteRecords = () => {
    return async( dispatch ) => {


        try {
            const resp = await fetchConToken( 'records', {}, 'DELETE'  );
            const body = await resp.json();


            if( body.msg === 'OK' ) {    

                dispatch( recordsLogout() );

            } else {
                console.log(body.msg);
            }
            

        } catch (error) {
            console.log(error);
        }
    }
}

export const recordsLogout = () => ({
    type: types.recordsLogout
})  
