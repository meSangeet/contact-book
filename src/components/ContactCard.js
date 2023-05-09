import React from 'react';

const cardContact  = (contact) => {
    return(
        <div className="item">
                <div className="content">
                    <div className="header">
                        {contact.name}
                        </div>
            <div>{contact.email}</div>
                </div>
                <i className="trash alternate outline icon" style={{color: "red", marignTop: "7px"}}></i>
            </div>
    );
}

export default cardContact;