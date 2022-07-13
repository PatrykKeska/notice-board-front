import React, {FormEvent, useState} from 'react';
import styled from 'styled-components';
import {SentPopup} from "./Sent";
import MapBackgroundImage from '../../../assets/background/mapa.jpeg'
import {getGeoCode} from "../../../utils/getGeoCode";


const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-width: 350px;
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  &:after {
    display: block;
    content: "";
    filter: blur(3px);
    background-image: url(${MapBackgroundImage});
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }
`
const StyledForm = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  min-width: 350px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .65);
  overflow: hidden;


`
const Input = styled.input`
  @media (max-width: 600px) {
    width: 100%;
  }
  margin: 5px 10px;
  font-size: .9em;
  padding: 15px;
  height: 25px;
  color: white;
  width: 50%;
  min-width: 200px;
  border: none;
  background: none;
  border-bottom: 2px solid white;
  border-radius: 0;

`
const TextArea = styled.textarea`
  @media (max-width: 600px) {
    width: 100%;
  }
  margin: 5px 10px;
  font-size: .9em;
  padding: 15px;
  height: 25px;
  color: white;
  width: 50%;
  min-width: 200px;
  border: none;
  background: none;
  border-bottom: 2px solid white;
  border-radius: 0;

`
const Label = styled.label`
  text-transform: uppercase;
  color: #2f2d2d;
  width: 80%;
  max-width: 800px;
  display: flex;
  justify-content: center;
  align-items: center;;
  flex-direction: column;
  @media (max-width: 600px) {

  }
`
const Strong = styled.strong`
  display: block;
  color: white;
  width: 120px;
  text-align: center;
  font-size: .7em;

`
const BtnSubmit = styled.button`
  border: none;
  background-color: #f69b66;
  padding: 10px;
  border-radius: 10px;
  text-transform: uppercase;
  color: white;
`


interface Form {
    name: string
    description: string
    price: number
    url: string,
    address: string

}

export const AddForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState<Form>({
        name: '',
        description: '',
        price: 0,
        url: '',
        address: '',
    })


    const addNew = async (e: FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const {lat, lon} = await getGeoCode(formData.address);
            await fetch('http://localhost:3001/ad/add', {
                method: 'POST',
                body: JSON.stringify({
                    ...formData,
                    lat,
                    lon,

                }),
                headers: {'Content-Type': 'application/json'},
            })
        } finally {
            setLoading(false)
            setFormData({
                name: '',
                description: '',
                price: 0,
                url: '',
                address: '',
            })
        }


    }
    return (
        loading ? <SentPopup/> : (
            <Wrapper>
                <StyledForm onSubmit={addNew}>
                    <Label><Strong>name</Strong>
                        <Input
                            name='name'
                            required type='text'
                            value={formData.name}
                            onChange={e => setFormData(
                                {
                                    ...formData,
                                    name: e.target.value
                                })}/>
                    </Label>

                    <Label><Strong>description</Strong>
                        <TextArea
                            name='description'
                            value={formData.description}
                            onChange={e => setFormData(
                                {
                                    ...formData,
                                    description: e.target.value
                                })}/>
                    </Label>

                    <Label>
                        <Strong>price</Strong>
                        <Input
                            name='price'
                            type='number'
                            value={formData.price}
                            onChange={e => setFormData(
                                {
                                    ...formData,
                                    price: Number(e.target.value)
                                })}/>
                    </Label>

                    <Label><Strong>url</Strong>
                        <Input
                            name='url'
                            required type='url
                            ' value={formData.url}
                            onChange={e => setFormData(
                                {
                                    ...formData,
                                    url: e.target.value,
                                })}/>

                    </Label>
                    <Label><Strong>Address</Strong>
                        <Input
                            onChange={e => setFormData(
                                {
                                    ...formData,
                                    address: e.target.value
                                })}
                            value={formData.address}
                            type='text'
                            required
                            name="address"/>
                    </Label>
                    <BtnSubmit type='submit'>Add new advertisement</BtnSubmit>
                </StyledForm>
            </Wrapper>)
    )

}



