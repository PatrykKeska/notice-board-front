import React, {FormEvent, useState} from 'react';
import styled from 'styled-components';
import {NewAdEntity} from 'types';
import {SentPopup} from "./Sent";


const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  flex-direction: column;
  min-width: 400px;
  height: 100vh;
  background-color: #f1dcaa;
  padding: 2% 40% 10% 0;
`

const Input = styled.input`
  margin: 5px 10px;
  height: 25px;
  width: 150px;
  border-radius: 5px;
  border: none;

`

const BtnSubmit = styled.button`
  border: none;
  background-color: #f69b66;
  padding: 10px;
  border-radius: 10px;
  text-transform: uppercase;
  color: white;
`

export const AddForm = () => {
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState<NewAdEntity>({
        name: '',
        description: '',
        price: 0,
        url: '',
        lat: 0,
        lon: 0,
    })


    const addNew = async (e: FormEvent) => {
        e.preventDefault();
        const data = await fetch('http://localhost:3001/ad/add', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {'Content-Type': 'application/json'},
        })
        if (data.status === 200) {
            setSent(true);
            setFormData({
                name: '',
                description: '',
                price: 0,
                url: '',
                lat: 0,
                lon: 0,
            })
            setTimeout(() => {
                setSent(false);
            }, 1000)


        }


    }
    return (
        sent ? <SentPopup/> : (
            <StyledForm onSubmit={addNew}>
                <label>name:
                    <Input type='text' value={formData.name}
                           onChange={e => setFormData({...formData, name: e.target.value})}/>
                </label>

                <label>description:
                    <Input value={formData.description} onChange={e => setFormData({
                        ...formData,
                        description: e.target.value
                    })} type='text'/>
                </label>

                <label>
                    price:
                    <Input type='number' value={formData.price} onChange={e => setFormData({
                        ...formData,
                        price: Number(e.target.value)
                    })}/>
                </label>

                <label>url:
                    <Input type='text' value={formData.url} onChange={e => setFormData({
                        ...formData,
                        url: e.target.value
                    })}/>
                </label>

                <label>lat: <Input type='number' value={formData.lat} onChange={e => setFormData({
                    ...formData,
                    lat: Number(e.target.value)
                })}/>
                </label>

                <label>lon: <Input type='number' value={formData.lon} onChange={e => setFormData({
                    ...formData,
                    lon: Number(e.target.value)
                })}/></label>

                <BtnSubmit type='submit'>Add new advertisement</BtnSubmit>
            </StyledForm>)
    )

}



