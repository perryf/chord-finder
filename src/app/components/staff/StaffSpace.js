import React from 'react';
import PropTypes from 'prop-types';

const StaffSpace = props => {
	const { handleSelectNote, note } = props;

	const selected =
		note.notes.sharp.selected ||
		note.notes.flat.selected ||
		note.notes.natural.selected;

	const isSharp = note.notes.sharp.selected;
	const isFlat = note.notes.flat.selected;

	return (
		<div
			className="staffSpace staffRow flexRowCenter"
			onClick={() => handleSelectNote(note)}
		>
			{selected && (
				<div id={note.id} tabIndex={-1} className="noteHead">
					<span tabIndex={-1} className="accidental">
						{isSharp && '#'}
						{isFlat && <em>b</em>}
					</span>
				</div>
			)}
		</div>
	);
};

StaffSpace.propTypes = {
	handleSelectNote: PropTypes.func.isRequired,
	note: PropTypes.object.isRequired
};

export default StaffSpace;
