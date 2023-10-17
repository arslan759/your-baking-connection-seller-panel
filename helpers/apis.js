export async function getStatesApi(setStates, setLoading) {
  try {
    setLoading(true)
    fetch('https://countriesnow.space/api/v0.1/countries/states', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        country: 'United states',
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        const filterStates = json.data.states.map((state) => state.name)
        setStates(filterStates)
        setLoading(false)
      })
  } catch (error) {
    setLoading(false)
  }
}

export async function getCitiesApi(state, setCities, setLoading) {
  try {
    setLoading(true)
    fetch('https://countriesnow.space/api/v0.1/countries/state/cities', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        country: 'United states',
        state: state,
      }),
    })
      .then((response) => response.json())
      .then((json) => {
        setCities(json?.data)
        setLoading(false)
      })
  } catch (error) {
    setLoading(false)
  }
}
