import { database, P } from '$cms'; // eslint-disable-line
import * as P from '$cms/field';
/* --- */

export default database({
	progetti: P.Object({
		titolo: P.String(),
		tag: P.Array(P.String())
	})
});
