import React from 'react'

import styled from 'styled-components'

const Form = () => {

const Label = styled.h3`
color: #AA5735;
`

const Form = styled.form`
background: #2E2E2E;
width: 342px;
margin-bottom: 24px;
`

    return (
        <Form autoComplete="on">
            <Label>name</Label>
            <input type="text"/>
            <Label>email</Label>
            <input type="email"/>
            <Label>message</Label>
            <textarea name="message"/>
        </Form>
    )
}

export default Form