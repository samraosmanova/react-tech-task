import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Table from '@mui/material/Table';
import Paper from '@mui/material/Paper';
import { memo } from 'react';

interface TableContentProps {
	head: string[];
	body: string[];
}

const TableContent = memo(({ body = [], head = [] }: TableContentProps) => (
	<TableContainer component={Paper}>
		<Table sx={{ minWidth: '100%' }} aria-label="simple table">
			<TableHead>
				<TableRow>
					{!!head.length &&
						head.map((item, index) => (
							<TableCell variant="head" align="center" key={index}>
								{item}
							</TableCell>
						))}
				</TableRow>
			</TableHead>
			<TableBody>
				<TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
					{!!body.length &&
						body.map((item, index) => (
							<TableCell align="center" key={index} component="th" scope="row">
								{item}
							</TableCell>
						))}
				</TableRow>
			</TableBody>
		</Table>
	</TableContainer>
));

export default TableContent;
