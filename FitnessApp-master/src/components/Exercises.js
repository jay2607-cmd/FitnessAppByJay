import React, { useEffect, useState } from 'react'
import Pagination from '@mui/material/Pagination'
import { Box, Stack, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData'
import ExerciseCard from './ExerciseCard'
const Exercises = ({setExercises, bodyPart,exercises }) => {
  const [currentPage,setCurrentPage]=useState(1);
  const exercisesPerPage=9;
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);
  const paginate=(e,val)=>{
    setCurrentPage(val);
    window.scrollTo({top:1800,behavior:'smooth'})
  }
  useEffect(()=>{
    const fetchExercisesData=async()=>{
      let exercisesData=[];
      if(bodyPart==='all'){
        exercisesData=await fetchData('https://exercisedb.p.rapidapi.com/exercises',exerciseOptions)
      }
      else{
        exercisesData=await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,exerciseOptions)
      }
      setExercises(exercisesData);
    }
    fetchExercisesData();

  },[bodyPart])
  return (
    <Box
      id='exercises'
      mt='50px'
      p='20px'
      sx={{
        mt: {
          lg: '110px'
        }
      }}
    >
      <Typography variant='h3' mb={4} id='exercises'>Showing Results</Typography>
      <Stack direction="row" sx={{gap:{lg:'50px',xs:'50px'}}}
      flexWrap="wrap" justifyContent="center">
     {
      currentExercises.map((e,i)=>(
        <ExerciseCard key={i} exercise={e}/>
      ))
     }
      </Stack>
      <Stack mt="100px" alignItems="center">
      {
        exercises.length>exercisesPerPage && (
          <Pagination color="standard" shape="rounded" defaultPage={1} count={Math.ceil(exercises.length/exercisesPerPage)}
          page={currentPage} onChange={paginate} size="large">
          </Pagination>
        )
      }

      </Stack>
    </Box>
  )
}

export default Exercises
