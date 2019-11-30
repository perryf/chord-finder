import { staffInfo } from 'data'

// * Creates Staff Master
export const shapeToStaff = state => {
	// prettier-ignore
	const { c4, d4, e4, f4, g4, a4, b4, c5, d5, e5, f5, g5, a5 } = state.notesMaster

	return [
		{ id: 'c4', notes: c4, staffInfo: staffInfo.c4 },
		{ id: 'd4', notes: d4, staffInfo: staffInfo.d4 },
		{ id: 'e4', notes: e4, staffInfo: staffInfo.e4 },
		{ id: 'f4', notes: f4, staffInfo: staffInfo.f4 },
		{ id: 'g4', notes: g4, staffInfo: staffInfo.g4 },
		{ id: 'a4', notes: a4, staffInfo: staffInfo.a4 },
		{ id: 'b4', notes: b4, staffInfo: staffInfo.b4 },
		{ id: 'c5', notes: c5, staffInfo: staffInfo.c5 },
		{ id: 'd5', notes: d5, staffInfo: staffInfo.d5 },
		{ id: 'e5', notes: e5, staffInfo: staffInfo.e5 },
		{ id: 'f5', notes: f5, staffInfo: staffInfo.f5 },
		{ id: 'g5', notes: g5, staffInfo: staffInfo.g5 },
		{ id: 'a5', notes: a5, staffInfo: staffInfo.a5 }
	]
}

// * Creates Keys Master
export const shapeToKeys = state => {
	// prettier-ignore
	const { c4, d4, e4, f4, g4, a4, b4, c5, d5, e5, f5, g5, a5 } = state.notesMaster

	return [
		{ id: 'c4', notes: [c4.natural], value: 0, blackKey: false }, // ? should b.sharp be included in c.notes?
		{ id: 'cS4', notes: [c4.sharp, d4.flat], value: 1, blackKey: true },
		{ id: 'd4', notes: [d4.natural], value: 2, blackKey: false },
		{ id: 'dS4', notes: [d4.sharp, e4.flat], value: 3, blackKey: true },
		{ id: 'e4', notes: [e4.natural, f4.flat], value: 4, blackKey: false },
		{ id: 'f4', notes: [f4.natural, e4.sharp], value: 5, blackKey: false },
		{ id: 'fS4', notes: [f4.sharp, g4.flat], value: 6, blackKey: true },
		{ id: 'g4', notes: [g4.natural], value: 7, blackKey: false },
		{ id: 'gS4', notes: [g4.sharp, a4.flat], value: 8, blackKey: true },
		{ id: 'a4', notes: [a4.natural], value: 9, blackKey: false },
		{ id: 'aS4', notes: [a4.sharp, b4.flat], value: 10, blackKey: true },
		{ id: 'b4', notes: [b4.natural, c5.flat], value: 11, blackKey: false },
		{ id: 'c5', notes: [c5.natural, b4.sharp], value: 12, blackKey: false },
		{ id: 'cS5', notes: [c5.sharp, d5.flat], value: 13, blackKey: true },
		{ id: 'd5', notes: [d5.natural], value: 14, blackKey: false },
		{ id: 'dS5', notes: [d5.sharp, e5.flat], value: 15, blackKey: true },
		{ id: 'e5', notes: [e5.natural, f5.flat], value: 16, blackKey: false },
		{ id: 'f5', notes: [f5.natural, e5.sharp], value: 17, blackKey: false },
		{ id: 'fS5', notes: [f5.sharp, g5.flat], value: 18, blackKey: true },
		{ id: 'g5', notes: [g5.natural], value: 19, blackKey: false },
		{ id: 'gS5', notes: [g5.sharp, a5.flat], value: 20, blackKey: true } // ? should a.flat be included in gS1.notes?
	]
}
