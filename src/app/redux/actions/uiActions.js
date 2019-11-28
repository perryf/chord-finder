import { FAVOR_SHARPS, FAVOR_FLATS, CLEAR_NOTES } from 'app/redux/types';

export const favorSharps = () => ({ type: FAVOR_SHARPS });

export const favorFlats = () => ({ type: FAVOR_FLATS });

export const handleClearNotes = () => ({ type: CLEAR_NOTES });
