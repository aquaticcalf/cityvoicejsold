import { useState, useEffect } from'react'
import axios from '../axios/axios'
import ListOfUsers from './listOfUsers'
import Option from './option'

const CreatePost = ({ setIsCreating }) => {
    const [searchName, setSearchName] = useState('')
    const [searchResults, setSearchResults] = useState([])

    const [labels, setLabels] = useState([])
    const [tag, setTag] = useState('')

    const [formData, setFormData] = useState({
        title: '',
        body: '',
        label: '',
        tagged: '',
        options: [''],
    })

    const [isPost, setIsPost] = useState(true)
    const [noOfOpts, setNoOfOpts] = useState(2)

    useEffect(() => {
        axios.get('/post/labels/')
        .then((resp) => {
            setLabels(resp.data)
        })
        .catch((error) => {
            console.log(error.message)
        })
    }, [])

    const handleSearchChange = (event) => {
        setSearchName(event.target.value)
    }

    const handleSearch = (e) => {
        if (e.code === 'Enter') {
            axios.get(`/user/whois/${searchName}/`)
            .then((resp) => {
                setSearchResults(resp.data)
            })
            .catch((err) => {
                console.log(err.message)
            })
        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }))
    }

    const handleSelectChange = (event) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            label: event.target.value,
        }))
    }

    useEffect(() => {
        if (searchResults.length === 0) {
            document.getElementById('tagUser').value = tag;
            setFormData((prevFormData) => ({
                ...prevFormData,
                tagged: tag,
            }))
        }
    }, [searchResults])

    const handleSubmit = () => {
        formData.options.shift()
        console.log(formData)
        axios.post('/post/', formData)
        .then((resp) => {
            console.log(resp)
        })
        .catch((err) => {
            console.log(err.message)
        })
        setIsCreating(false)
    }

    const handleCancel = () => {
        setIsCreating(false)
    }

    const handlePoll = () => {
        setIsPost(false)
    }

    const handlePost = () => {
        setIsPost(true)
    }

    const handlePlus = () => {
        setNoOfOpts((prev) => prev + 1)
    }

    const updateOption = (index, value) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            options: prevFormData.options.map((option, i) => (i === index? value : option)),
        }))
    }

    const renderOpts = () => {
        return Array(noOfOpts).fill(0).map((_, index) => (
            <Option key={index} index={index + 1} updateOption={updateOption} />
        ))
    }

    return (
        <div className="flex flex-col p-2 space-y-2">
            <div className="flex">
                <div className="text-xl font-bold">
                    Create {isPost? 'Post' : 'Poll'}
                </div>
                <div className="grow"></div>
                    {isPost && (
                        <button className="rounded-[100px] bg-gray-500" onClick={handlePoll}>
                            Poll
                        </button>
                    )}
                    {!isPost && (
                        <button className="rounded-[100px] bg-gray-500" onClick={handlePost}>
                            Post
                        </button>
                    )}
            </div>
            <input className="rounded-[100px] px-4 py-2" type="text" name="title" placeholder="Title" value={formData.title} onChange={handleInputChange} />
            {isPost && (
                <input className="rounded-[100px] px-4 py-2" type="text" name="body" placeholder="Body" value={formData.body} onChange={handleInputChange} />
            )}
            {!isPost && (
                <div className="flex flex-col space-y-2">
                    <p>Create Options</p>
                    <div className="flex flex-col space-y-2">{renderOpts()}</div>
                    <button className="bg-gray-500 rounded-full" onClick={handlePlus}>
                        +
                    </button>
                </div>
            )}
            <select className="rounded-[100px] px-4 py-2" name="Labels" value={formData.label} onChange={handleSelectChange} >
                <option value="">Select Label</option>
                {labels.map((option, index) => (
                    <option key={index} value={index}>
                    {option.name}
                    </option>
                ))}
            </select>
            <input className="rounded-[100px] px-4 py-2" type="text" name="tagUser" id="tagUser" placeholder="Tag an account" onChange={handleSearchChange} onKeyDown={handleSearch}/>
            {searchResults && (
                <ListOfUsers list={searchResults} setTag={setTag} setSearchResults={setSearchResults}/>
            )}
            <div className="flex gap-2">
                <button className="rounded-[100px] px-4 py-2 grow bg-gray-500" onClick={handleCancel}>
                    Cancel
                </button>
                <button className="rounded-[100px] px-4 py-2 grow bg-gray-500" onClick={handleSubmit}>
                    Post
                </button>
            </div>
        </div>
    )
}

export default CreatePost
