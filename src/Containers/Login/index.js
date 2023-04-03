import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import LoginImg from '../../assets/loginImg.svg'
import LogoImage from '../../assets/logoLogin.svg'
import { Button } from '../../components/'
import { useUser } from '../../hooks/UserContext'
import api from '../../services/api'
import {
  Container,
  LoginImage,
  ContainerItens,
  SignInLogin,
  Label,
  Input,
  ErrorMessage
} from './styles'

export function Login() {
  const navigate = useNavigate()
  const { putUserData } = useUser()
  const schema = yup.object().shape({
    email: yup
      .string()
      .email('Digite um e-mail valido')
      .required('Digite um e-mail.'),
    password: yup
      .string()
      .required('Digite a senha')
      .min(6, 'a senha deve ter pelo menos 6 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async clientData => {
    const { data } = await toast.promise(
      api.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando dados',
        success: 'Seja Bem vindo(a)',
        error: 'Verifique se os dados estão co  rretos'
      }
    )

    putUserData(data)

    setTimeout(() => {
      if (data.admin) {
        navigate('/pedidos')
      } else {
        navigate('/')
      }
    }, 1000)
  }

  return (
    <Container>
      <LoginImage src={LoginImg} alt="imagem da tela de login" />
      <ContainerItens>
        <img src={LogoImage} />
        <h1>Login</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label>Email</Label>
          <Input
            type="email"
            {...register('email', { required: true })}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password', { required: true })}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 70, marginBottom: 25 }}>
            Sing In
          </Button>
        </form>
        <SignInLogin>
          Não possui conta ?{' '}
          <Link to="/cadastro" style={{ color: '#fff' }}>
            Sign Up
          </Link>
        </SignInLogin>
      </ContainerItens>
    </Container>
  )
}
