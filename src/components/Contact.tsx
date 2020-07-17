import React, { useEffect, useState } from 'react'

const Contact = (props: any) => {

  const [contacts, setContacts] = useState([])

  useEffect(() => {
    if (props.content.contact) {
      setContacts(props.content.contact)
    }
  }, [props.content])
  return (
    <section id="contact">
      <div className="container wow fadeInUp">
        <div className="row">
          <div className="col-md-12">
            <h3 className="section-title">Contact Us</h3>
            <div className="section-title-divider" />
            <p className="section-description">Reach out to us, see the contact information below.</p>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <table className="table table-striped border bg-white">
            <thead>
              <tr>
                <th scope="col">Campus</th>
                <th scope="col">Contact Info.</th>
                <th scope="col">Local Prefix</th>
              </tr>
            </thead>
            <tbody>
              {contacts && (contacts.map((item: any, index: number) => {
                return (
                  <tr>
                    <td>{item.campus}</td>
                    <td>{item.contact}</td>
                    <td>{item.local_prefix}</td>
                  </tr>
                )
              }))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

export default Contact;

