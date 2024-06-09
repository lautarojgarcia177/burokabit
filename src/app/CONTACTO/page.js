"use client";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  FormErrorMessage,
  Heading
} from "@chakra-ui/react";

const ContactForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (values) => {
    // Handle form submission
    console.log(values);
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ })
    })
  };

  return (
    <Box
      as="form"
      onSubmit={handleSubmit(onSubmit)}
      maxWidth="500px"
      margin="0 auto"
      p={4}
      className="flex flex-col"
    >
      <Heading className="text-center mb-4 mt-2" as="h1" size="lg">
        CONTACTO
      </Heading>
      <FormControl isInvalid={errors.email} mb={4}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "El Email es requerido",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
              message: "Invalid email address",
            },
          })}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.subject} mb={4}>
        <FormLabel htmlFor="subject">Asunto</FormLabel>
        <Input
          id="subject"
          {...register("subject", {
            required: "El asunto es requerido",
          })}
        />
        <FormErrorMessage>
          {errors.subject && errors.subject.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.message} mb={4}>
        <FormLabel htmlFor="message">Mensaje</FormLabel>
        <Textarea
          id="message"
          {...register("message", {
            required: "El mensaje es requerido",
          })}
        />
        <FormErrorMessage>
          {errors.message && errors.message.message}
        </FormErrorMessage>
      </FormControl>

      <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
        Enviar
      </Button>
    </Box>
  );
};

export default ContactForm;
