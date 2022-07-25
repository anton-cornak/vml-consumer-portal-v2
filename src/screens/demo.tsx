import React, { ReactElement } from 'react';
import { useDropzone } from 'react-dropzone';
import { FormattedMessage } from 'react-intl';
import { Icon } from '@vismaux/react-nc4';

function Demo(): ReactElement {
	const { getRootProps, getInputProps } = useDropzone({});
	return (
		<>
			{/* eslint-disable react/jsx-props-no-spreading */}
			<div {...getRootProps({ className: 'dropzone' })}>
				<input className="input-zone" {...getInputProps()} />
				<p className="dropzone-content">
					<FormattedMessage id="dropzone.description" />
				</p>
				<Icon
					name="upload"
					size="lg"
					disabled
					className="dropzone-icon"
				/>
			</div>
		</>
	);
}

export default Demo;
