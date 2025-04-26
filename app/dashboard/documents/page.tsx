import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FileText, Upload, Download, Trash2, FileCheck, FilePlus, FileWarning } from "lucide-react"

export default function DocumentsPage() {
  // Mock document data
  const requiredDocuments = [
    { id: 1, name: "Passport Copy", status: "uploaded", date: "2023-10-15", fileType: "PDF" },
    { id: 2, name: "Academic Transcripts", status: "pending", date: "", fileType: "" },
    { id: 3, name: "Statement of Purpose", status: "uploaded", date: "2023-11-02", fileType: "DOCX" },
    { id: 4, name: "Recommendation Letters", status: "uploaded", date: "2023-11-05", fileType: "PDF" },
    { id: 5, name: "English Proficiency Test", status: "pending", date: "", fileType: "" },
  ]

  const uploadedDocuments = requiredDocuments.filter((doc) => doc.status === "uploaded")
  const pendingDocuments = requiredDocuments.filter((doc) => doc.status === "pending")

  // Mock university documents
  const universityDocuments = [
    { id: 1, name: "Admission Letter", university: "University of Toronto", date: "2023-12-10", fileType: "PDF" },
    {
      id: 2,
      name: "Course Registration Guide",
      university: "University of Toronto",
      date: "2024-01-05",
      fileType: "PDF",
    },
    { id: 3, name: "Housing Information", university: "University of Toronto", date: "2024-01-10", fileType: "PDF" },
  ]

  // Mock visa documents
  const visaDocuments = [
    { id: 1, name: "Visa Application Form", date: "2023-11-20", fileType: "PDF" },
    { id: 2, name: "Visa Approval Letter", date: "2024-01-15", fileType: "PDF" },
  ]

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Documents</h1>
        <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
          <FilePlus className="mr-2 h-4 w-4" /> Upload New Document
        </Button>
      </div>

      <Tabs defaultValue="required" className="w-full">
        <TabsList className="grid grid-cols-4 w-full max-w-2xl">
          <TabsTrigger value="required">Required Documents</TabsTrigger>
          <TabsTrigger value="university">University Documents</TabsTrigger>
          <TabsTrigger value="visa">Visa Documents</TabsTrigger>
          <TabsTrigger value="all">All Documents</TabsTrigger>
        </TabsList>

        <TabsContent value="required" className="space-y-4 mt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader className="bg-green-50 dark:bg-green-900/20">
                <CardTitle className="flex items-center">
                  <FileCheck className="mr-2 h-5 w-5 text-green-600" />
                  Uploaded Documents
                </CardTitle>
                <CardDescription>Documents you have already submitted</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {uploadedDocuments.map((doc) => (
                    <li
                      key={doc.id}
                      className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border"
                    >
                      <div className="flex items-center">
                        <FileText className="mr-3 h-5 w-5 text-indigo-500" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-gray-500">
                            Uploaded on {doc.date} • {doc.fileType}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Download className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm" className="text-red-500 hover:text-red-700">
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="bg-amber-50 dark:bg-amber-900/20">
                <CardTitle className="flex items-center">
                  <FileWarning className="mr-2 h-5 w-5 text-amber-600" />
                  Pending Documents
                </CardTitle>
                <CardDescription>Documents you still need to submit</CardDescription>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {pendingDocuments.map((doc) => (
                    <li
                      key={doc.id}
                      className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border"
                    >
                      <div className="flex items-center">
                        <FileText className="mr-3 h-5 w-5 text-amber-500" />
                        <div>
                          <p className="font-medium">{doc.name}</p>
                          <p className="text-xs text-gray-500">Required for application</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-amber-500 hover:bg-amber-600">
                        <Upload className="mr-2 h-4 w-4" /> Upload
                      </Button>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="university" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>University Documents</CardTitle>
              <CardDescription>Important documents from your university</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {universityDocuments.map((doc) => (
                  <li
                    key={doc.id}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border"
                  >
                    <div className="flex items-center">
                      <FileText className="mr-3 h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-gray-500">
                          {doc.university} • {doc.date} • {doc.fileType}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> Download
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visa" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Visa Documents</CardTitle>
              <CardDescription>Documents related to your visa application</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {visaDocuments.map((doc) => (
                  <li
                    key={doc.id}
                    className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border"
                  >
                    <div className="flex items-center">
                      <FileText className="mr-3 h-5 w-5 text-purple-500" />
                      <div>
                        <p className="font-medium">{doc.name}</p>
                        <p className="text-xs text-gray-500">
                          {doc.date} • {doc.fileType}
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" /> Download
                    </Button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="all" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle>All Documents</CardTitle>
              <CardDescription>Complete document repository</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs uppercase bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Document Name
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Type
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Date
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...requiredDocuments, ...universityDocuments, ...visaDocuments].map((doc) => (
                      <tr
                        key={`${doc.id}-${doc.name}`}
                        className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
                      >
                        <td className="px-6 py-4 font-medium">{doc.name}</td>
                        <td className="px-6 py-4">{doc.fileType || "N/A"}</td>
                        <td className="px-6 py-4">{doc.date || "Pending"}</td>
                        <td className="px-6 py-4">
                          {doc.status === "uploaded" || doc.date ? (
                            <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                              Available
                            </span>
                          ) : (
                            <span className="px-2 py-1 text-xs rounded-full bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200">
                              Pending
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4">
                          {doc.status === "uploaded" || doc.date ? (
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button variant="ghost" size="sm">
                              <Upload className="h-4 w-4" />
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Export All</Button>
              <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700">
                <FilePlus className="mr-2 h-4 w-4" /> Upload New
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
