using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AddRigid : MonoBehaviour
{
    Rigidbody rb;
    bool flag = false;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Return) && flag == false)
        {
            rb = gameObject.AddComponent<Rigidbody>();
            flag = true;
        }
        /* これでも良き
        if(flag == false)
        {
            if (Input.GetKeyDown(KeyCode.Return))
            {
                rb = gameObject.AddComponent<Rigidbody>();
                flag = true;
            }
        }
        */
    }
}
