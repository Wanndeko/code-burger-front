import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import LogoImage from '../../assets/logoLogin.svg'
import RegisterImg from '../../assets/regiterImg.svg'
import { Button, ErrorMessage } from '../../components/'
import api from '../../services/api'
import {
  Container,
  RegisterImage,
  ContainerItens,
  SignInLogin,
  Label,
  Input
} from './styles'
export function Register() {
  const schema = yup.object().shape({
    name: yup.string().required('Digite seu nome'),
    email: yup
      .string()
      .email('Digite um e-mail valido')
      .required('Digite um e-mail.'),
    password: yup
      .string()
      .required('Digite a senha')
      .min(6, 'a senha deve ter pelo menos 6 digitos'),
    confirmPassword: yup
      .string()
      .required('Digite a senha')
      .oneOf([yup.ref('password')], 'As senhas devem ser iguais')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async clientData => {
    try {
      const { status } = await api.post(
        'users',
        {
          name: clientData.name,
          email: clientData.email,
          password: clientData.password
        },
        { validateStatus: () => true }
      )

      if (status === 201 || status === 200) {
        toast.success('cadastro criado com sucesso')
      } else if (status === 409) {
        toast.error('E-mail ja cadastrado, faça login para continuar')
      } else {
        throw new Error()
      }
    } catch (err) {
      toast.error('Falha no sistema tente novamente.')
    }
  }

  return (
    <Container>
      <RegisterImage src={RegisterImg} alt="imagem da tela de registro" />
      <ContainerItens>
        <img src={LogoImage} />
        <h1>Cadastre-se</h1>
        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <Label error={errors.name?.message}>Name</Label>
          <Input
            type="text"
            {...register('name', { required: true })}
            error={errors.name?.message}
          />
          <ErrorMessage>{errors.name?.message}</ErrorMessage>

          <Label error={errors.email?.message}>Email</Label>
          <Input
            type="email"
            {...register('email', { required: true })}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label error={errors.password?.message}>Senha</Label>
          <Input
            type="password"
            {...register('password', { required: true })}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Label error={errors.confirmPassword?.message}>Confirmar Senha</Label>
          <Input
            type="password"
            {...register('confirmPassword', { required: true })}
            error={errors.confirmPassword?.message}
          />
          <ErrorMessage>{errors.confirmPassword?.message}</ErrorMessage>

          <Button type="submit" style={{ marginTop: 25, marginBottom: 25 }}>
            Sing Up
          </Button>
        </form>
        <SignInLogin>
          Já possui conta ?{' '}
          <Link to="/login" style={{ color: '#fff' }}>
            Sign In
          </Link>
        </SignInLogin>
      </ContainerItens>
    </Container>
  )
}
