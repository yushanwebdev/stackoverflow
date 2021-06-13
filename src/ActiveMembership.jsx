import { Formik, Form, Field, FieldArray } from "formik";

export const ActiveMembership = () => (
  <div>
    <h1>Friend List</h1>
    <Formik initialValues={{ memberships: [] }}>
      {(props) => (
        <Form>
          <FieldArray name="memberships">
            {({ push, form: { values } }) => (
              <div>
                {values.memberships &&
                  values.memberships.length > 0 &&
                  values.memberships.map((item, index) => (
                    <div key={index}>
                      <Field
                        name={`memberships.${index}.name`}
                        placeholder="Membership Title"
                      />
                      <Field
                        name={`memberships.${index}.position`}
                        placeholder="Position"
                      />
                      <Field
                        name={`memberships.${index}.join.date`}
                        placeholder="Join Date"
                      />
                    </div>
                  ))}
                <button type="button" onClick={() => push({})}>
                  Add More
                </button>
              </div>
            )}
          </FieldArray>
        </Form>
      )}
    </Formik>
  </div>
);
