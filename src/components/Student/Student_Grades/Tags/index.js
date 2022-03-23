import React, {useState} from "react";

const Tags = props => {
  
  const {student, allStudents, index} = props;
  const [tags, setTags] = useState([]);
  const [newTagName, setNewTagName] = useState('');

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') { 
      setTags([...tags, event.target.value])
      // console.log(allStudents[index], index)
      if (student.tags) {
        student.tags = [...student.tags, event.target.value]
      } else {
        student.tags = [event.target.value]
      }
      // console.log(student.tags)
      setNewTagName('')
    } 
  }

  const onChange = (event) => {
    setNewTagName(event.target.value);
  }

  return (
    <div className="tag-container">
      {tags.map( (tag, index) => (
        <span key={index} className="tag">{tag}</span>
      ))}
      <div>
        <input id="new-tag" type="text" value={newTagName} onChange={onChange} onKeyPress={handleKeyPress} placeholder="Add a tag"/>
      </div>
    </div>
  )
  
}

export default Tags;