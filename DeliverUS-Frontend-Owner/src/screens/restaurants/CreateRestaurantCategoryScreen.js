/*import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as yup from 'yup'
import InputItem from '../../components/InputItem'
import TextRegular from '../../components/TextRegular'
import * as GlobalStyles from '../../styles/GlobalStyles'
import { showMessage } from 'react-native-flash-message'
import { createRestaurantCategories } from '../../api/RestaurantEndpoints'
import { Formik } from 'formik'
import TextError from '../../components/TextError'
export default function CreateRestaurantCategoryScreen ({ navigation }) {
  const [backendErrors, setBackendErrors] = useState()

  const initialRestaurantCategoryValues = { name: null }
  const validationSchema = yup.object().shape({
    name: yup
      .string()
      .max(55, 'Name too long')
      .required('Name is required')
  })

  const createRestaurantC = async (values) => {
    setBackendErrors([])
    try {
      const createdRestaurantCategorie = await createRestaurantCategories(values)
      showMessage({
        message: `Restaurant ${createdRestaurantCategorie.name} succesfully created`,
        type: 'success',
        style: GlobalStyles.flashStyle,
        titleStyle: GlobalStyles.flashTextStyle
      })
      navigation.navigate('CreateRestaurantScreen', { dirty: true })
    } catch (error) {
      console.log(error)
      setBackendErrors(error.errors)
    }
  }
  return (
      <Formik
        validationSchema={validationSchema}
        initialValues={initialRestaurantCategoryValues}
        onSubmit={createRestaurantC}>
        {({ handleSubmit, values }) => (
          <ScrollView>
            <View style={{ alignItems: 'center' }}>
              <View style={{ width: '60%' }}>
                <InputItem
                  name='name'
                  label='Name:'
                />
                <Pressable
                  onPress={handleSubmit
                  }
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed
                        ? GlobalStyles.brandSuccessTap
                        : GlobalStyles.brandSuccess
                    },
                    styles.button
                  ]}>
                <View style={[{ flex: 1, flexDirection: 'row', justifyContent: 'center' }]}>
                  <MaterialCommunityIcons name='content-save' color={'white'} size={20}/>
                  <TextRegular textStyle={styles.text}>
                    Save
                  </TextRegular>
                </View>
                </Pressable>
                {backendErrors &&
                backendErrors.map((error, index) => <TextError key={index}>{error.param}-{error.msg}</TextError>)
              }
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    height: 40,
    padding: 10,
    width: '100%',
    marginTop: 20,
    marginBottom: 20
  },
  text: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginLeft: 5
  },
  imagePicker: {
    height: 40,
    paddingLeft: 10,
    marginTop: 20,
    marginBottom: 80
  },
  image: {
    width: 100,
    height: 100,
    borderWidth: 1,
    alignSelf: 'center',
    marginTop: 5
  }
})*/


import { createRestaurantCategories } from '../../api/RestaurantEndpoints'
import React, { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, View } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as yup from 'yup'
import InputItem from '../../components/InputItem'
import TextRegular from '../../components/TextRegular'
import * as GlobalStyles from '../../styles/GlobalStyles'
import { showMessage } from 'react-native-flash-message'
import { Formik } from 'formik'
import TextError from '../../components/TextError'

export default function CreateRestaurantCategoryScreen ({ navigation }) {
    const [backendErrors, setBackendErrors] = useState()
    const initialCategoryValues = { name: null}
    const validationSchema = yup.object().shape({
      name: yup
        .string()
        .max(50, 'Name too long')
        .required('Name is required'),
    })

    const createRestaurantCategory = async (values) => {
        setBackendErrors([])
        try {
            console.log(values)
            console.log(values.body)
          const createdRestaurantCategory = await createRestaurantCategories(values)
          showMessage({
            message: `Restaurant category ${createdRestaurantCategory.name} succesfully created`,
            type: 'success',
            style: GlobalStyles.flashStyle,
            titleStyle: GlobalStyles.flashTextStyle
          })
          navigation.navigate('CreateRestaurantScreen', { dirty: true })
        } catch (error) {
          console.log(error)
          setBackendErrors(error.errors)
        }
      }
      
    return (
        <Formik
          validationSchema={validationSchema}
          initialValues={initialCategoryValues}
          onSubmit={createRestaurantCategory}>
          {({ handleSubmit, setFieldValue, values }) => (
            <ScrollView>
              <View style={{ alignItems: 'center' }}>
                <View style={{ width: '60%' }}>
                  <InputItem 
                    name='name'
                    label='Name:'
                  />

                <Pressable
                    onPress={handleSubmit}
                    style={({ pressed }) => [
                      {
                        backgroundColor: pressed
                          ? GlobalStyles.brandSuccessTap
                          : GlobalStyles.brandSuccess
                      },
                      styles.button
                    ]}>
                  <View style={[{ flex: 1, flexDirection: 'row', justifyContent: 'center' }]}>
                    <MaterialCommunityIcons name='content-save' color={'white'} size={20}/>
                    <TextRegular textStyle={styles.text}>
                      Save
                    </TextRegular>
                  </View>
                  </Pressable>

                  {backendErrors &&
                    backendErrors.map((error, index) => <TextError key={index}>{error.param}-{error.msg}</TextError>)
                  }

                </View>
              </View>
            </ScrollView>
          )}
        </Formik>
      )
}

const styles = StyleSheet.create({
    button: {
      borderRadius: 8,
      height: 40,
      padding: 10,
      width: '100%',
      marginTop: 20,
      marginBottom: 20
    },
    text: {
      fontSize: 16,
      color: 'white',
      textAlign: 'center',
      marginLeft: 5
    }
  })