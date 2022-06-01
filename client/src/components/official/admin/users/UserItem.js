import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { activateUser } from '../../../../actions/user';

const UserItem = ({
    user: { firstName, lastName, id, email, role, active },
    activateUser,
}) => {
    const handleOnChange = () => {
        activateUser(id);
    };

    return (
        <tr>
            <td>{id}</td>
            <td>{`${firstName} ${lastName}`}</td>
            <td>{role}</td>
            <td>{email}</td>
            <td>
                <div
                    className="form-check form-switch"
                    style={{ paddingLeft: '2.5em' }}
                >
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        onChange={handleOnChange}
                        checked={active ? 'checked' : ''}
                    />
                    {/* <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label> */}
                </div>
            </td>
            <td>
                <Link
                    to={`/official/registrar/appeals/${id}`}
                    className="btn btn-sm btn-info"
                    style={{
                        fontSize: '.7rem',
                        padding: '0 .2rem',
                        marginRight: '1em',
                    }}
                >
                    Edit
                </Link>
                <Link
                    to={`/official/registrar/appeals/${id}`}
                    className="btn btn-sm btn-danger"
                    style={{ fontSize: '.7rem', padding: '0 .2rem' }}
                >
                    Delete
                </Link>
            </td>
        </tr>
    );
};

export default connect(null, { activateUser })(UserItem);
